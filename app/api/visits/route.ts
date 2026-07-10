import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { sessionId } = await request.json()

    if (!supabase) {
      return NextResponse.json({ error: 'Supabase client is not initialized' }, { status: 500 })
    }

    const { error } = await supabase
      .from('page_visits')
      .insert([{ session_id: sessionId }])

    if (error) {
      console.error('Error inserting visit:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function GET() {
  try {
    if (!supabase) {
      return NextResponse.json({ error: 'Supabase client is not initialized' }, { status: 500 })
    }

    // Hitung tanggal batas
    const startOfToday = new Date()
    startOfToday.setUTCHours(0, 0, 0, 0)

    const sevenDaysAgo = new Date()
    sevenDaysAgo.setUTCDate(sevenDaysAgo.getUTCDate() - 7)

    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setUTCDate(thirtyDaysAgo.getUTCDate() - 30)

    // Lakukan query secara paralel
    const [
      { count: todayCount, error: todayErr },
      { count: sevenDaysCount, error: sevenDaysErr },
      { count: thirtyDaysCount, error: thirtyDaysErr },
      { count: totalCount, error: totalErr }
    ] = await Promise.all([
      supabase
        .from('page_visits')
        .select('*', { count: 'exact', head: true })
        .gte('visited_at', startOfToday.toISOString()),
      supabase
        .from('page_visits')
        .select('*', { count: 'exact', head: true })
        .gte('visited_at', sevenDaysAgo.toISOString()),
      supabase
        .from('page_visits')
        .select('*', { count: 'exact', head: true })
        .gte('visited_at', thirtyDaysAgo.toISOString()),
      supabase
        .from('page_visits')
        .select('*', { count: 'exact', head: true })
    ])

    if (todayErr || sevenDaysErr || thirtyDaysErr || totalErr) {
      const errorMsg = todayErr?.message || sevenDaysErr?.message || thirtyDaysErr?.message || totalErr?.message
      console.error('Error fetching visits stats:', errorMsg)
      return NextResponse.json({ error: errorMsg }, { status: 500 })
    }

    return NextResponse.json({
      today: todayCount || 0,
      last7Days: sevenDaysCount || 0,
      last30Days: thirtyDaysCount || 0,
      total: totalCount || 0
    })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

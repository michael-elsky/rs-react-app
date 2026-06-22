import { DataProps } from '@/components/Result/Result.types'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const items = body.items || []

    const headers = 'Title,Description,URL'

    const csvRows = items.map((item: DataProps) => {
      const title = `"${item.title?.replace(/"/g, '""')}"`
      const crawl = `"${item.opening_crawl?.replace(/"/g, '""').replace(/\n/g, ' ')}"`
      const url = `"${item.url}"`

      return `${title},${crawl},${url}`
    })

    const csvContent = [headers, ...csvRows].join('\n')

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="selected_films.csv"`,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}

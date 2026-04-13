import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

const secret = process.env.SANITY_REVALIDATE_SECRET

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get('secret')

  if (token !== secret) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  revalidatePath('/')
  revalidatePath('/events')
  revalidatePath('/about')

  return NextResponse.json({ revalidated: true })
}
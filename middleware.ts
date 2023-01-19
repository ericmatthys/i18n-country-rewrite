import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(
  request: NextRequest,
  event: NextFetchEvent
): Promise<NextResponse> {
  let url = request.nextUrl.clone();

  url.pathname = `/country/${request.geo?.country ?? 'US'}${url.pathname}`;

  return NextResponse.rewrite(url);
}

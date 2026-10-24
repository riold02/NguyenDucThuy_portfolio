export async function GET() {
  return new Response("dh=1df3701aa00c494fd01a2ac3358e3b0aa13c1879\n", {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

export async function CallApiGet<T = []>(url: string): Promise<T> {
  return fetch(url).then((e) => e.json()) 
}

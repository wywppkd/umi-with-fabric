export default function sleep(duration: number = 1500): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

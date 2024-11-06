export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 md:py-5">
      <div className="text-center justify-center">{children}</div>
    </section>
  );
}

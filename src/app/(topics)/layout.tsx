export default function TopicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:p-16 md:p-8 sm: p-4 max-w-screen-lg m-auto prose prose-stone lg:prose-xl">
      {children}
    </div>
  );
}

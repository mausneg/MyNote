export default function Base(prop) {
  const { children } = prop;
  return (
  <div className="w-full min-h-screen">
    {children}
    </div>);
}

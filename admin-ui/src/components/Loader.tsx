function Loader() {
  return (
    <div>
      <div className="absolute left-0 top-0 bg-(--bg) flex items-center justify-center h-full w-full z-50">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-neutral-400"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-neutral-900 animate-spin"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;

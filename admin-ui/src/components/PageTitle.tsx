function PageTitle({title}:{title:string}) {
  return (
    <div className="text-3xl font-clashGrotesk text-(--text) font-medium">
      {title}
    </div>
  );
}

export default PageTitle;
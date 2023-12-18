export default function NavigationBar(): JSX.Element {
  return (
    <div className="flex justify-between py-4">
      <div className="banner grow text-center">
        Welcome to my nextJS practice website
      </div>
      <div className="user-info">Some random user info</div>
    </div>
  );
}

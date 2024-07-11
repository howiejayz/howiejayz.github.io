import { LoginButton } from './LoginButton';

export default function Footer() {
  return (
    <div className="w-full flex flex-col relative">
      <div className="divider divider-vertical mx-32 xl:opacity-0" />
      <footer className="footer footer-center pb-4">
        <div className="">
          <div className="absolute bottom-2 right-2">
            <LoginButton />
          </div>
          <aside>
            <p className="font-bold">
              Howie Jayz <br />
            </p>
            <p>Copyright © 2024 - All right reserved</p>
          </aside>
        </div>
      </footer>
    </div>
  );
}

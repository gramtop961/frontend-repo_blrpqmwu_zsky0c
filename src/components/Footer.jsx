export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold text-slate-900">Company</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900">Press</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Explore</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#deals" className="hover:text-slate-900">Deals</a></li>
              <li><a href="#book" className="hover:text-slate-900">Book</a></li>
              <li><a href="#trust" className="hover:text-slate-900">Trust & Safety</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Support</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#support" className="hover:text-slate-900">Help center</a></li>
              <li><a href="#" className="hover:text-slate-900">Cookie policy</a></li>
              <li><a href="#" className="hover:text-slate-900">Privacy</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Get the app</div>
            <p className="mt-3 text-slate-600">Book on the go with our iOS and Android apps.</p>
            <div className="mt-3 flex gap-2">
              <span className="h-9 w-28 rounded-md bg-slate-900/90" />
              <span className="h-9 w-28 rounded-md bg-slate-900/90" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} AeroTrust, Inc. All rights reserved.</div>
          <div className="text-xs text-slate-500">Made with care for seamless journeys.</div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-zinc-500">
          © 2026 SpendWise AI
        </p>

        <div className="flex gap-6 text-zinc-400">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>

      </div>

    </footer>
  );
}
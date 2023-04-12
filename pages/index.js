import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div className="bg-blue-400 w-screen h-screen flex items-center">
          <div className="text-center w-full">
            <h1 className="text-2xl">Welcome {session.user.name}</h1>
            <button
              className="bg-red-700 text-white p-2 px-4 rounded-lg"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            className="bg-white p-2 px-4 rounded-lg"
            onClick={() => signIn('google')}
          >
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
}

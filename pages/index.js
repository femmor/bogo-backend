import { useSession } from 'next-auth/react';
import { Layout } from '../components';

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="flex items-center justify-between">
        <h1 className="text-blue-900 text-lg">
          Welcome, {session ? <b>{session.user?.name.split(' ')[0]}</b> : null}!
        </h1>
        {session ? (
          <div className="bg-gray-200 text-black flex items-center gap-2 p-2 rounded-2xl">
            <img
              src={session ? session.user?.image : '/avatar.png'}
              alt="User image"
              className="rounded-full w-6 h-6"
            />
            <span>{session ? session.user?.name : null}</span>
          </div>
        ) : null}
      </div>
    </Layout>
  );
}

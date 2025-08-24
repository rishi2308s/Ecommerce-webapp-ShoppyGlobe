import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../redux/authSlice';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('demo@demo.com');
  const [password, setPassword] = useState('password');
  const { loading, error } = useSelector(s => s.auth);
  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    dispatch(loginAsync({ email, password }));
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto p-4 space-y-3">
      <h2 className="text-xl font-bold">Login</h2>
      <input className="border p-2 w-full" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <input className="border p-2 w-full" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>Login</button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}

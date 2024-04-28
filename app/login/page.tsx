// import { login, signup } from './actions';

// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

// export default function LoginPage() {
//   return (
//     <div className='mx-auto max-w-[450px] space-y-6'>
//       <div className='space-y-2 text-center'>
//         <h1 className='text-3xl font-bold'>Welcome Back</h1>
//         <p className='text-gray-500 dark:text-gray-400'>
//           Enter your credentials to access your account.
//         </p>
//       </div>
//       <form className='space-y-4'>
//         <div className='space-y-2'>
//           <Label htmlFor='email'>Email</Label>
//           <Input id='email' name='email' type='email' required />
//         </div>
//         <div className='space-y-2'>
//           <Label htmlFor='password'>Password</Label>
//           <Input id='password' name='password' type='password' required />
//         </div>
//         <div className='flex items-center justify-between'>
//           <div className='flex items-center space-x-2'>
//             <Button variant='outline' formAction={login}>
//               Login
//             </Button>
//             <Button formAction={signup}>Sign Up</Button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
import { login, signup } from './actions';

export default function LoginPage() {
  return (
    <form>
      <label htmlFor='email'>Email:</label>
      <input id='email' name='email' type='email' required />
      <label htmlFor='password'>Password:</label>
      <input id='password' name='password' type='password' required />
      <br />
      <button formAction={login}>Log in</button>
      <br />
      <button formAction={signup}>Sign up</button>
    </form>
  );
}

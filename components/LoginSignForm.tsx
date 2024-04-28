/**
 * v0 by Vercel.
 * @see https://v0.dev/t/r8SfzwxD9Cx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LoginSignForm() {
  return (
    <div className='mx-auto max-w-[450px] space-y-6 dark:bg-gray-900 dark:text-gray-50 p-6 rounded-lg'>
      <div className='space-y-2 text-center'>
        <h1 className='text-3xl font-bold'>Welcome Back</h1>
        <p className='text-gray-500 dark:text-gray-400'>
          Enter your credentials to access your account.
        </p>
      </div>
      <div className='space-y-4'>
        <div className='space-y-2'>
          <Label className='text-gray-400' htmlFor='email'>
            Email
          </Label>
          <Input
            className='bg-gray-800 border-gray-700 text-gray-50 focus:border-gray-500 focus:ring-gray-500'
            id='email'
            placeholder='m@example.com'
            required
            type='email'
          />
        </div>
        <div className='space-y-2'>
          <Label className='text-gray-400' htmlFor='password'>
            Password
          </Label>
          <Input
            className='bg-gray-800 border-gray-700 text-gray-50 focus:border-gray-500 focus:ring-gray-500'
            id='password'
            required
            type='password'
          />
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Button
              className='bg-gray-800 border-gray-700 text-gray-50 hover:bg-gray-700'
              variant='outline'
            >
              Login
            </Button>
            <Button className='bg-gray-800 border-gray-700 text-gray-50 hover:bg-gray-700'>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

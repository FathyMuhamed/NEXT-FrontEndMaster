import AuthForm from "@/components/AuthForm";
import { AuthFormMode } from '@/components/AuthForm';


export default function SignIn() {
  return <div>
    <AuthForm mode={"signin"} />
  </div>;
}

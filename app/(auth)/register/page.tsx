import AuthForm from "@/components/AuthForm";
import { AuthFormMode } from '@/components/AuthForm';


export default function Register() {
  return <div>
    <AuthForm mode={"register"} />
  </div>;
}

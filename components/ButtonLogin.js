import Link from "next/link";

const ButtonLogin = (props) => {
  //destructuring props
  const { isLoggedIn, name } = props;

  if (props.isLoggedIn) {
    return <Link href="/dashboard">Welcome back {name}</Link>;
  }
  return <Link href="/login">Login</Link>;
};

export default ButtonLogin;

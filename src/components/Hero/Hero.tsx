import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <>
      <div className="mt-28 md:mt-36 p-3 ">
        <div className="  flex flex-col items-center justify-center space-y-3">
          <div className="space-y-6 ">
            {" "}
            <p className="text-3xl font-bold md:text-5xl text-center  ">
              Defending Your Rights, Protecting Your Future
            </p>
            <p className="text-xl md:text-3xl text-center px-8 ">
              {" "}
              We provide compassionate and effective legal representation for
              individuals and businesses.
            </p>{" "}
          </div>
          <div className="w-full space-y-3 md:w-1/2 md:space-x-4  flex flex-col md:space-y-0 md:flex-row items-center justify-center m-auto text-center">
            {" "}
            <Link href="/practiceareas">
              {" "}
              <Button>Get Legal help today</Button>
            </Link>
            <Link href="/about-us">
              {" "}
              <Button>Learn more about us</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

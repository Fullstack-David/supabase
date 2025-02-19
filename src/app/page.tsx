import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <h1 className="p-5 font-bold text-[3rem] text-center">Home Page</h1>
        <h2 className="text-center text-[1rem]">Supabase Connection</h2>
        <div className="grid grid-cols-2 gap-4 p-5 justify-center items-center">
          <div className="flex items-center justify-center p-5">
            <Image
              src="https://images.unsplash.com/photo-1611771341253-dadb347165a8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="unsplash"
              width={400}
              height={400}
              className="object-cover rounded-lg "
            />
          </div>
          <p className="p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            repunctio, cum nihil similique cupiditate odit quibusdam. In
            obcaecati, sapiente neque, voluptas, excepturi fugiat mollitia
            inventore incidunt sunt modi nihil pariatur quasi rem. Cupiditate
            nisi, asperiores natus earum consequuntur voluptatum, minima
            accusamus veniam consequatur officiis libero dolorum doloribus quis
            inventore
          </p>
        </div>
        <div className="grid grid-cols-2 items-center justify-center p-5">
          <p className="m-[2rem]">
            culpa amet quo esse quidem quibusdam dolor excepturi ex ut
            distinctio. Unde architecto natus id cum, assumenda culpa aliquam
            amet, ut quis laboriosam molestiae cupiditate reiciendis ratione
            veritatis architecto ducimus, aliquid, obcaecati ullam. Aperiam
            fugit autem fuga voluptas sapiente nobis iusto non consequatur unde
            numquam? Sapiente consequuntur sed, odit beatae voluptates
            reiciendis fuga, mollitia
          </p>
          <div className="flex items-center justify-center p-5">
            <Image
              src="https://images.unsplash.com/photo-1502021680532-838cfc650323?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="unsplash"
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-5 items-center">
          <div className="flex items-center justify-center p-5">
            <Image
              src="https://images.unsplash.com/photo-1519758747502-84b7b18a6160?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="unsplash"
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
          <p className="m-[2rem]">
            quod corporis iste nostrum voluptatem ab quidem deleniti delectus
            nobis nihil quisquam! Ipsum ab laborum minima odio odit eveniet
            culpa ducimus labore ullam et unde quos, sint rem ut nesciunt, totam
            sapiente. Ad delectus velit unde repellendus non aliquam ipsa
            consequuntur corporis minus officiis, illum ex, consectetur officiis
            expedita, quos dolor similique quisquam itaque repellat qui et?
            Veniam dolore deserunt voluptas maiores, iusto earum! Illo eaque
            totam laboriosam minus suscipit, voluptas hic sint.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

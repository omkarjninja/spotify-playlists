import '../../App.css'
function First(){
    return(
        <>
        {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="relative bg-[url(https://images.unsplash.com/photo-1643208589896-07b8feb4dffa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
        Let us find Your

        <strong className="block font-extrabold text-[#03C646]">
          Tasteful Playlists.
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
        This sites contains many spotify playlists from all the genres 
        just click the link and you are good to go.
      </p>

      <div className="mt-8 flex-wrap gap-4 text-center">
        <a
          href="#music"
          className="block w-1/2 rounded bg-[#03C646] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#03C646] focus:outline-none focus:ring active:bg-[#03C646] sm:w-auto"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>
<span className="flex items-center">
  <span className="h-px flex-1 bg-black"></span>
  <span className="shrink-0 px-6">Music is the remedy for souls</span>
  <span className="h-px flex-1 bg-black"></span>
</span>
        </>
    )
}
export default First;
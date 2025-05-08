import star from '/icon-star.svg';

import ListItem from './components/ListItem';

function App() {
  return (
    <div className="min-h-full app grid grid-rows-[220px_1fr]  sm:grid-rows-[320px_1fr] relative ">
      <div className="bg-no-repeat bg-cover bg-left bg-[url(/bg-mobile.svg)] sm:bg-[url(/bg-desktop.svg)] "></div>
      <div className="bg-pink-100"></div>

      <div className="bg-white w-[90%] absolute top-[20%] left-1/2 -translate-x-1/2  max-w-[600px] rounded-lg p-6">
        <header className="flex items-center gap-6">
          <img className="w-5" src={star} alt="" />
          <h1 className="font-bold text-3xl">
            FAQ<span>s</span>
          </h1>
        </header>

        <ul>
          <ListItem
            titleText="What is Frontend Mentor , and how will it help me?"
            bodyText="Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS, and JavaScript. It's suitable for all levels and ideal
              for portfolio building."
          />

          <ListItem
            titleText="Is Frontend Mentor free?"
            bodyText="Yes, Frontend Mentor offers both free and premium coding
              challenges, with the free option providing access to a range of
              projects suitable for all skill levels."
          />
          <ListItem
            titleText="Can I use Frontend Mentor projects in my portfolio?"
            bodyText="Yes, you can use projects completed on Frontend Mentor in your
              portfolio. It's an excellent way to showcase your skills to
              potential employers!"
          />
          <ListItem
            titleText="How can I get help if I'm stuck on a Frontend Mentor challenge?"
            bodyText="The best place to get help is inside Frontend Mentor's Discord
              community. There's a help channel where you can ask questions and
              seek support from other community members."
          />
        </ul>
      </div>
    </div>
  );
}

export default App;

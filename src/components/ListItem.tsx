import { useState } from 'react';
import plus from '/icon-plus.svg';
import minus from '/icon-minus.svg';
import { motion } from 'motion/react';

interface Props {
  titleText: string;
  bodyText: string;
}

const ListItem = ({ titleText, bodyText }: Props) => {
  const [opened, setOpened] = useState(false);

  const variants = {
    active: {
      height: 'auto',
      opacity: 0.6,
    },
    inactive: {
      height: 0,
      opacity: 0,
    },
  };

  return (
    <li className="border-b-1 border-pink-200 last-of-type:border-none py-5">
      <div className="flex items-center justify-between gap-8">
        <p className="font-semibold text-lg">{titleText}</p>
        <button onClick={() => setOpened(!opened)} className="rounded-full">
          <img className="cursor-pointer" src={opened ? minus : plus} alt="" />
          <span className="sr-only">Open</span>
        </button>
      </div>
      <motion.p
        className="overflow-hidden text-fuchsia-900"
        variants={variants}
        animate={opened ? 'active' : 'inactive'}
      >
        <br />
        {bodyText}
      </motion.p>
    </li>
  );
};

export default ListItem;

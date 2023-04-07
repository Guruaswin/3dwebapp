import { motion, AnimatePresence } from 'framer-motion';
import { useSnapShot } from 'valtio';

import state from '../store';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapShot(state);

  return (
    <div>Home</div>
  )
}

export default Home
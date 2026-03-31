import { motion, AnimatePresence } from 'framer-motion';

function PageTransition({ children }) {
  return (
    <>
      {/* Blue wipe overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          zIndex: 9,
          backgroundColor: '#00bbfa',
          pointerEvents: 'none',
        }}
      />

      {/* Page content */}
      <motion.div
        initial={{ opacity: 1 }}
        style={{ width: '100%', height: '100%' }}
      >
        {children}
      </motion.div>
    </>
  );
}

export default PageTransition;
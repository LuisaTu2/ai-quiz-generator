import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface MotionDivProps {
    content: ReactNode;
    duration?: number;
}

const MotionDiv = ({content, duration = 0.6}: MotionDivProps) => {
    return(
        <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration, ease: "easeInOut" }}
            >
            {content}
        </motion.div>
    )
}

export default MotionDiv;
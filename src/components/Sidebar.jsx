import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Sidebar = ({ panels, activeIndex, onNavigate }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.aside
            className="dashboard-sidebar hidden md:flex flex-col bg-gray-50 dark:bg-dark-card border-r border-gray-200 dark:border-dark-border"
            onHoverStart={() => setExpanded(true)}
            onHoverEnd={() => setExpanded(false)}
        >
            {/* Nav items */}
            <div className="flex flex-col gap-1 p-2 flex-1 pt-4">
                {panels.map((panel, i) => {
                    const Icon = panel.icon;
                    const isActive = i === activeIndex;
                    return (
                        <motion.button
                            key={panel.id}
                            onClick={() => onNavigate(i)}
                            className={`sidebar-item group relative ${isActive
                                ? 'bg-primary-500/10 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400'
                                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-border hover:text-gray-800 dark:hover:text-gray-200'
                            }`}
                            whileHover={{ x: 2 }}
                            whileTap={{ scale: 0.97 }}
                            title={!expanded ? panel.name : undefined}
                        >
                            {/* Active indicator */}
                            {isActive && (
                                <motion.div
                                    layoutId="sidebar-active"
                                    className="absolute left-0 top-2 bottom-2 w-0.5 bg-primary-500 rounded-full"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}

                            <span className="sidebar-icon">
                                <Icon size={18} />
                            </span>

                            <AnimatePresence>
                                {expanded && (
                                    <motion.span
                                        className="sidebar-label text-sm font-medium"
                                        initial={{ opacity: 0, x: -6 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -6 }}
                                        transition={{ duration: 0.18 }}
                                    >
                                        {panel.name}
                                    </motion.span>
                                )}
                            </AnimatePresence>

                            {/* Keyboard number hint */}
                            <AnimatePresence>
                                {expanded && (
                                    <motion.span
                                        className="sidebar-kbd ml-auto text-gray-400 dark:text-gray-600 bg-gray-200 dark:bg-dark-border"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.18, delay: 0.05 }}
                                    >
                                        {i + 1}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    );
                })}
            </div>

            {/* Footer hint */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        className="p-3 pb-4 text-xs text-gray-400 dark:text-gray-600 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex items-center justify-center gap-1">
                            <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-dark-border rounded text-xs font-mono">←</kbd>
                            <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-dark-border rounded text-xs font-mono">→</kbd>
                            <span>para navegar</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.aside>
    );
};

export default Sidebar;

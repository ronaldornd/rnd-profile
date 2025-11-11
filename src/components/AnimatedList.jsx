import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Componente de exemplo para demonstrar AnimatePresence
 * com animações de entrada e saída de itens
 */
const AnimatedList = () => {
    const [items, setItems] = useState([
        { id: 1, title: 'Item 1', color: '#0cdcf7' },
        { id: 2, title: 'Item 2', color: '#f70c8f' },
        { id: 3, title: 'Item 3', color: '#8f0cf7' },
        { id: 4, title: 'Item 4', color: '#f7c70c' },
    ]);

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const addItem = () => {
        const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
        const colors = ['#0cdcf7', '#f70c8f', '#8f0cf7', '#f7c70c', '#0cf77c'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        setItems([...items, {
            id: newId,
            title: `Item ${newId}`,
            color: randomColor
        }]);
    };

    return (
        <section className="section-container bg-gray-50 dark:bg-dark-card/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">
                    <span className="gradient-text">Animações com Exit</span>
                </h2>

                <div className="flex justify-center gap-4 mb-8">
                    <button
                        onClick={addItem}
                        className="btn-primary"
                    >
                        Adicionar Item
                    </button>
                </div>

                {/* AnimatePresence permite animações de saída */}
                <AnimatePresence mode="popLayout">
                    <div className="grid md:grid-cols-2 gap-4">
                        {items.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{
                                    opacity: 0,
                                    scale: 0,
                                    rotate: 10,
                                    transition: { duration: 0.3 }
                                }}
                                className="card-glass p-6 relative"
                                style={{
                                    borderLeft: `4px solid ${item.color}`
                                }}
                            >
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Este é um item de exemplo com animação de entrada e saída
                                </p>

                                <motion.button
                                    onClick={() => removeItem(item.id)}
                                    className="btn-secondary text-sm"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Remover
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </AnimatePresence>

                {items.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-gray-500 dark:text-gray-400 py-12"
                    >
                        <p className="text-xl mb-4">Nenhum item na lista</p>
                        <p className="text-sm">Clique em "Adicionar Item" para começar</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default AnimatedList;

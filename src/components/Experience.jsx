import { FaBriefcase, FaGraduationCap, FaLanguage } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const Experience = () => {
    const experiences = [
        {
            title: 'Monitor de Disciplina',
            organization: 'IFPE',
            period: '2023 - 2024',
            description: 'Auxiliei estudantes em disciplinas técnicas, desenvolvendo habilidades de ensino e comunicação.',
            achievement: 'Nota 9.5 de avaliação',
            icon: '👨‍🏫',
        },
        {
            title: 'Freelancer - Suporte Técnico',
            organization: 'Autônomo',
            period: '2022 - 2024',
            description: 'Manutenção de computadores, suporte remoto e resolução de problemas técnicos.',
            achievement: 'Múltiplos clientes satisfeitos',
            icon: '🔧',
        },
        {
            title: 'Projetos Pessoais - Desenvolvimento',
            organization: 'Autônomo',
            period: '2023 - Presente',
            description: 'Desenvolvimento de aplicações web com React, Node.js, Prisma e PostgreSQL.',
            achievement: 'Portfólio em crescimento',
            icon: '💻',
        },
    ];

    return (
        <section id="experience" className="section-container">
            <ScrollReveal variant="slideUp" once={true}>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Experiência & <span className="gradient-text">Formação</span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                    Meu histórico profissional e acadêmico
                </p>
            </ScrollReveal>

            {/* Professional Summary */}
            <ScrollReveal variant="fadeIn" once={true} className="card-glass p-8 mb-12 max-w-3xl mx-auto">
                <div className="flex items-start gap-4">
                    <div className="text-4xl">👨‍💻</div>
                    <div>
                        <h3 className="text-2xl font-bold mb-3 gradient-text">Resumo Profissional</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            Técnico em Informática com experiência em manutenção de computadores,
                            suporte remoto e desenvolvimento web com React, Prisma e PostgreSQL.
                            Apaixonado por resolver problemas e criar soluções eficientes.
                        </p>
                    </div>
                </div>
            </ScrollReveal>

            {/* Experience Timeline */}
            <div className="max-w-4xl mx-auto mb-12">
                <ScrollReveal variant="slideLeft" once={true}>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <FaBriefcase className="text-primary-500" />
                        Experiências Relevantes
                    </h3>
                </ScrollReveal>
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-blue-600"></div>

                    {experiences.map((exp, index) => (
                        <ScrollReveal
                            key={index}
                            variant="slideLeft"
                            delay={index * 0.15}
                            className="relative pl-20 pb-12 last:pb-0"
                        >
                            {/* Timeline Dot */}
                            <div
                                className="absolute left-6 top-0 w-5 h-5 bg-primary-500 rounded-full border-4 border-white dark:border-dark-bg"
                            />

                            <div className="card-glass p-6 transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl">{exp.icon}</div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-primary-500 mb-1">{exp.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                                            {exp.organization} • {exp.period}
                                        </p>
                                        <p className="text-gray-700 dark:text-gray-300 mb-3">{exp.description}</p>
                                        <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                                            🏆 {exp.achievement}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

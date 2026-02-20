export type Category = 'Educação' | 'Ciência' | 'Sociedade' | 'PI' | 'Indústria' | 'Cultura' | 'Design' | 'Inovação';

export interface EventData {
  id: string;
  date: string; // MM-DD format for recurring events
  title: string;
  category: Category;
  description: string;
  isHighlight?: boolean;
}

export const CATEGORIES: Record<Category, { color: string; label: string; icon: string }> = {
  'Educação': { color: 'bg-blue-500', label: 'Educação', icon: 'BookOpen' },
  'Ciência': { color: 'bg-cyan-500', label: 'Ciência', icon: 'Atom' },
  'Sociedade': { color: 'bg-pink-500', label: 'Sociedade', icon: 'Users' },
  'PI': { color: 'bg-purple-600', label: 'Propriedade Intelectual', icon: 'Copyright' },
  'Indústria': { color: 'bg-slate-500', label: 'Indústria', icon: 'Factory' },
  'Cultura': { color: 'bg-orange-500', label: 'Cultura', icon: 'Palette' },
  'Design': { color: 'bg-rose-500', label: 'Design', icon: 'PenTool' },
  'Inovação': { color: 'bg-emerald-500', label: 'Inovação', icon: 'Lightbulb' },
};

export const EVENTS: EventData[] = [
  {
    id: '1',
    date: '01-24',
    title: 'Dia Internacional da Educação',
    category: 'Educação',
    description: 'Data proclamada pela ONU para celebrar o papel da educação na paz e no desenvolvimento.'
  },
  {
    id: '2',
    date: '02-11',
    title: 'Dia Internacional das Mulheres e Meninas na Ciência',
    category: 'Ciência',
    description: 'Promove o acesso integral e igualitário da participação de mulheres e meninas na ciência.'
  },
  {
    id: '3',
    date: '03-08',
    title: 'Dia Internacional da Mulher',
    category: 'Sociedade',
    description: 'Celebração das conquistas sociais, políticas e econômicas das mulheres.'
  },
  {
    id: '4',
    date: '03-20',
    title: 'Aniversário da Convenção da União de Paris (CUP)',
    category: 'PI',
    description: 'Marco fundamental da propriedade industrial, assinado em 1883.'
  },
  {
    id: '5',
    date: '04-26',
    title: 'Dia Mundial da Propriedade Intelectual',
    category: 'PI',
    description: 'Data estabelecida pela OMPI para promover a discussão sobre o papel da PI no incentivo à inovação e criatividade.',
    isHighlight: true
  },
  {
    id: '6',
    date: '05-14',
    title: 'Aniversário da Lei da Propriedade Industrial',
    category: 'PI',
    description: 'Celebração da Lei nº 9.279/1996, que regula direitos e obrigações relativos à propriedade industrial no Brasil.'
  },
  {
    id: '7',
    date: '05-22',
    title: 'Dia Internacional da Biodiversidade',
    category: 'Ciência',
    description: 'Visa aumentar a conscientização e compreensão sobre as questões da biodiversidade.'
  },
  {
    id: '8',
    date: '05-24',
    title: 'Dia Nacional do Café',
    category: 'Indústria',
    description: 'Celebra uma das maiores riquezas da agricultura e indústria brasileira.'
  },
  {
    id: '9',
    date: '05-25',
    title: 'Dia da Indústria',
    category: 'Indústria',
    description: 'Homenagem ao patrono da indústria brasileira, Roberto Simonsen.'
  },
  {
    id: '10',
    date: '05-29',
    title: 'Dia Nacional da Literatura Brasileira',
    category: 'Cultura',
    description: 'Homenagem a José de Alencar e celebração da rica produção literária do país.'
  },
  {
    id: '11',
    date: '06-09',
    title: 'Dia Nacional da Língua Portuguesa',
    category: 'Cultura',
    description: 'Celebração do idioma oficial do Brasil e de outros países da CPLP.'
  },
  {
    id: '12',
    date: '07-08',
    title: 'Dia Nacional da Ciência e do Pesquisador Científico',
    category: 'Ciência',
    description: 'Data de fundação da Sociedade Brasileira para o Progresso da Ciência (SBPC).'
  },
  {
    id: '13',
    date: '07-14',
    title: 'Aniversário da OMPI',
    category: 'PI',
    description: 'Celebração da entrada em vigor da Convenção que estabeleceu a Organização Mundial da Propriedade Intelectual.'
  },
  {
    id: '14',
    date: '09-15',
    title: 'Dia Mundial do Design',
    category: 'Design',
    description: 'Reconhece o valor do design e sua capacidade de promover mudanças.'
  },
  {
    id: '15',
    date: '10-16',
    title: 'Dia Nacional da Ciência e Tecnologia',
    category: 'Ciência',
    description: 'Mobiliza a população, em especial crianças e jovens, em torno de temas e atividades de C&T.'
  },
  {
    id: '16',
    date: '10-19',
    title: 'Dia Nacional da Inovação',
    category: 'Inovação',
    description: 'Incentivo à inovação como estratégia de desenvolvimento econômico e social.'
  },
  {
    id: '17',
    date: '11-04',
    title: 'Dia do Inventor',
    category: 'Inovação',
    description: 'Homenagem aos inventores e incentivo à criação de novas soluções.'
  },
  {
    id: '18',
    date: '11-05',
    title: 'Dia Nacional do Design',
    category: 'Design',
    description: 'Homenagem ao nascimento de Aloísio Magalhães, pioneiro do design no Brasil.'
  },
  {
    id: '19',
    date: '12-03',
    title: 'Dia Nacional de Combate à Pirataria',
    category: 'PI',
    description: 'Conscientização sobre os prejuízos da pirataria e biopirataria para o país.'
  },
  {
    id: '20',
    date: '12-11',
    title: 'Aniversário do INPI',
    category: 'PI',
    description: 'Fundação do Instituto Nacional da Propriedade Industrial em 1970.'
  }
];

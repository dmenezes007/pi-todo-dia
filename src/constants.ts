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
  },
  {
    id: '21',
    date: '03-03',
    title: 'Dia da Biodiversidade',
    category: 'Ciência',
    description: 'Conscientização sobre a preservação da biodiversidade e o uso sustentável dos recursos naturais.'
  },
  {
    id: '22',
    date: '03-14',
    title: 'Dia Internacional da Matemática',
    category: 'Ciência',
    description: 'Destaca o papel da matemática em algoritmos, criptografia, inteligência artificial e inovação tecnológica.'
  },
  {
    id: '23',
    date: '03-20',
    title: 'Dia Mundial da Criatividade e Inovação',
    category: 'Inovação',
    description: 'Incentiva soluções criativas para desafios sociais, científicos e econômicos.'
  },
  {
    id: '24',
    date: '04-23',
    title: 'Dia Mundial do Livro e do Direito de Autor',
    category: 'PI',
    description: 'Valoriza a literatura e reforça a importância do direito autoral para autores e criadores.'
  },
  {
    id: '25',
    date: '06-01',
    title: 'Dia da Imprensa',
    category: 'Sociedade',
    description: 'Reconhece a importância da imprensa para a democracia, a informação e a liberdade de expressão.'
  },
  {
    id: '26',
    date: '06-05',
    title: 'Dia Mundial do Meio Ambiente',
    category: 'Ciência',
    description: 'Promove ações de proteção ambiental, sustentabilidade e responsabilidade coletiva.'
  },
  {
    id: '27',
    date: '06-08',
    title: 'Dia Mundial da Antifalsificação',
    category: 'PI',
    description: 'Conscientização sobre enforcement, combate à pirataria e proteção de marcas e produtos autênticos.'
  },
  {
    id: '28',
    date: '06-19',
    title: 'Dia do Cinema Brasileiro',
    category: 'Cultura',
    description: 'Celebra a produção audiovisual nacional e a relevância cultural do cinema brasileiro.'
  },
  {
    id: '29',
    date: '08-14',
    title: 'Dia Mundial do Combate à Pirataria',
    category: 'PI',
    description: 'Reforça a proteção da propriedade intelectual e os impactos econômicos e sociais da pirataria.'
  },
  {
    id: '30',
    date: '09-12',
    title: 'Dia do Programador',
    category: 'Inovação',
    description: 'Homenagem aos profissionais de software e à colaboração tecnológica, incluindo o ecossistema open source.'
  },
  {
    id: '31',
    date: '09-21',
    title: 'Dia Mundial das Pessoas com Deficiência',
    category: 'Sociedade',
    description: 'Promove inclusão, acessibilidade e igualdade de oportunidades para pessoas com deficiência.'
  },
  {
    id: '32',
    date: '09-27',
    title: 'Dia Mundial do Turismo',
    category: 'Indústria',
    description: 'Reconhece o impacto econômico, cultural e social do turismo no desenvolvimento dos territórios.'
  },
  {
    id: '33',
    date: '09-30',
    title: 'Dia da Secretária',
    category: 'Sociedade',
    description: 'Valoriza profissionais essenciais para organização, comunicação e suporte nas instituições.'
  },
  {
    id: '34',
    date: '10-01',
    title: 'Dia Mundial da Terceira Idade',
    category: 'Sociedade',
    description: 'Incentiva respeito, inclusão e qualidade de vida para a população idosa.'
  },
  {
    id: '35',
    date: '10-05',
    title: 'Dia Internacional da Micro e Pequena Empresa',
    category: 'Indústria',
    description: 'Destaca o papel das micro e pequenas empresas na geração de emprego, renda e inovação.'
  },
  {
    id: '36',
    date: '10-12',
    title: 'Dia da Criança',
    category: 'Sociedade',
    description: 'Data voltada à promoção dos direitos da criança, proteção integral e desenvolvimento saudável.'
  },
  {
    id: '37',
    date: '10-15',
    title: 'Dia do Professor',
    category: 'Educação',
    description: 'Reconhece o papel estratégico dos educadores na formação de cidadãos e no avanço do conhecimento.'
  },
  {
    id: '38',
    date: '10-17',
    title: 'Dia da Indústria',
    category: 'Indústria',
    description: 'Valoriza o setor industrial como motor de produtividade, empregos e transformação tecnológica.'
  },
  {
    id: '39',
    date: '11-17',
    title: 'Dia da Criatividade',
    category: 'Inovação',
    description: 'Estimula pensamento criativo, experimentação e desenvolvimento de novas soluções.'
  },
  {
    id: '40',
    date: '11-19',
    title: 'Dia Mundial do Empreendedorismo Feminino',
    category: 'Inovação',
    description: 'Reconhece o protagonismo de mulheres empreendedoras na economia e no ecossistema de inovação.'
  },
  {
    id: '41',
    date: '11-20',
    title: 'Dia Mundial da Consciência Negra',
    category: 'Sociedade',
    description: 'Promove reflexão sobre igualdade racial, valorização da cultura afro-brasileira e combate ao racismo.'
  },
  {
    id: '42',
    date: '12-04',
    title: 'Dia da Propaganda',
    category: 'Indústria',
    description: 'Reconhece a comunicação publicitária e seu papel na economia criativa e no posicionamento de marcas.'
  },
  {
    id: '43',
    date: '12-08',
    title: 'Dia da Família',
    category: 'Sociedade',
    description: 'Celebra os vínculos familiares e sua importância para o cuidado, educação e convivência social.'
  },
  {
    id: '44',
    date: '12-18',
    title: 'Dia do Museólogo',
    category: 'Cultura',
    description: 'Homenageia profissionais que preservam, pesquisam e comunicam o patrimônio cultural em museus.'
  }
];

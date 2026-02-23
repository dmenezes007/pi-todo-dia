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
  },
  {
    id: '45',
    date: '01-01',
    title: 'Dia Mundial da Paz',
    category: 'Sociedade',
    description: 'Incentiva a cultura de paz, o diálogo e a cooperação entre povos, instituições e comunidades.'
  },
  {
    id: '46',
    date: '01-04',
    title: 'Dia Mundial do Braille',
    category: 'Educação',
    description: 'Reforça a importância do sistema braille para alfabetização, autonomia e inclusão de pessoas cegas.'
  },
  {
    id: '47',
    date: '01-07',
    title: 'Dia da Liberdade de Cultos',
    category: 'Sociedade',
    description: 'Valoriza o direito fundamental à liberdade religiosa, de crença e de consciência.'
  },
  {
    id: '48',
    date: '01-20',
    title: 'Dia da Consciência Indígena',
    category: 'Sociedade',
    description: 'Promove reflexão sobre direitos, culturas, saberes tradicionais e protagonismo dos povos indígenas.'
  },
  {
    id: '49',
    date: '01-21',
    title: 'Dia Nacional de Combate à Intolerância Religiosa',
    category: 'Sociedade',
    description: 'Estimula ações de respeito à diversidade religiosa e enfrentamento de todas as formas de discriminação.'
  },
  {
    id: '50',
    date: '01-24',
    title: 'Dia Nacional dos Aposentados',
    category: 'Sociedade',
    description: 'Reconhece a contribuição social de aposentados e a necessidade de políticas de proteção e dignidade.'
  },
  {
    id: '51',
    date: '01-29',
    title: 'Dia Nacional da Visibilidade das Pessoas Travestis e Trans',
    category: 'Sociedade',
    description: 'Fortalece a luta por direitos, respeito, cidadania e acesso a oportunidades para pessoas trans e travestis.'
  },
  {
    id: '52',
    date: '02-01',
    title: 'Semana Mundial da Harmonia Inter-religiosa',
    category: 'Sociedade',
    description: 'Incentiva diálogo inter-religioso, convivência pacífica e cooperação entre diferentes tradições de fé.'
  },
  {
    id: '53',
    date: '02-18',
    title: 'Dia Internacional da Síndrome de Asperger',
    category: 'Sociedade',
    description: 'Amplia a conscientização sobre neurodiversidade, inclusão e apoio a pessoas no espectro autista.'
  },
  {
    id: '54',
    date: '02-24',
    title: 'Dia da Conquista do Voto Feminino no Brasil',
    category: 'Sociedade',
    description: 'Marca o avanço histórico da participação política das mulheres e da democracia no país.'
  },
  {
    id: '55',
    date: '02-28',
    title: 'Dia Mundial das Doenças Raras',
    category: 'Ciência',
    description: 'Promove informação, pesquisa e políticas públicas para diagnóstico e cuidado de pessoas com doenças raras.'
  },
  {
    id: '56',
    date: '03-01',
    title: 'Dia Mundial de Zero Discriminação',
    category: 'Sociedade',
    description: 'Reafirma igualdade de direitos e combate a discriminações por raça, gênero, deficiência, orientação ou crença.'
  },
  {
    id: '57',
    date: '03-21',
    title: 'Dia Internacional da Síndrome de Down',
    category: 'Sociedade',
    description: 'Incentiva inclusão, acessibilidade e participação plena de pessoas com síndrome de Down em todos os espaços.'
  },
  {
    id: '58',
    date: '03-21',
    title: 'Dia Internacional para a Eliminação da Discriminação Racial',
    category: 'Sociedade',
    description: 'Mobiliza ações de enfrentamento ao racismo e promoção da equidade racial na sociedade.'
  },
  {
    id: '59',
    date: '03-25',
    title: 'Dia Nacional do Orgulho Gay',
    category: 'Sociedade',
    description: 'Celebra a diversidade sexual e reforça a defesa da cidadania e dos direitos da população LGBTQIAPN+.'
  },
  {
    id: '60',
    date: '04-02',
    title: 'Dia Mundial de Conscientização do Autismo',
    category: 'Sociedade',
    description: 'Promove conhecimento, inclusão e respeito às pessoas autistas em ambientes educacionais, sociais e profissionais.'
  },
  {
    id: '61',
    date: '04-14',
    title: 'Dia Nacional de Luta pela Educação Inclusiva',
    category: 'Educação',
    description: 'Defende práticas pedagógicas acessíveis e equitativas para estudantes com diferentes perfis e necessidades.'
  },
  {
    id: '62',
    date: '04-19',
    title: 'Dia dos Povos Indígenas',
    category: 'Sociedade',
    description: 'Valoriza identidades, conhecimentos e direitos dos povos indígenas, com foco em respeito e autodeterminação.'
  },
  {
    id: '63',
    date: '04-24',
    title: 'Dia Nacional da LIBRAS',
    category: 'Educação',
    description: 'Reconhece a Língua Brasileira de Sinais como instrumento essencial de comunicação, cultura e inclusão.'
  },
  {
    id: '64',
    date: '04-25',
    title: 'Dia Internacional do Cão-Guia',
    category: 'Sociedade',
    description: 'Destaca a importância dos cães-guia para autonomia, mobilidade e segurança de pessoas com deficiência visual.'
  },
  {
    id: '65',
    date: '04-28',
    title: 'Dia Internacional da Saúde e Segurança no Trabalho',
    category: 'Indústria',
    description: 'Incentiva prevenção de acidentes, promoção da saúde ocupacional e ambientes de trabalho mais seguros.'
  },
  {
    id: '66',
    date: '05-13',
    title: 'Dia Nacional de Denúncia contra o Racismo',
    category: 'Sociedade',
    description: 'Convida à denúncia de práticas racistas e fortalece políticas de justiça, reparação e igualdade racial.'
  },
  {
    id: '67',
    date: '05-15',
    title: 'Dia Internacional das Famílias',
    category: 'Sociedade',
    description: 'Reconhece a diversidade de arranjos familiares e sua relevância para cuidado, afeto e desenvolvimento social.'
  },
  {
    id: '68',
    date: '05-17',
    title: 'Dia Internacional Contra a Homofobia',
    category: 'Sociedade',
    description: 'Reforça o enfrentamento à LGBTQIA+fobia e a construção de espaços seguros e inclusivos.'
  },
  {
    id: '69',
    date: '05-21',
    title: 'Dia Mundial para a Diversidade Cultural e para o Diálogo e o Desenvolvimento',
    category: 'Cultura',
    description: 'Valoriza a pluralidade cultural como base para convivência democrática, inovação social e desenvolvimento sustentável.'
  },
  {
    id: '70',
    date: '06-13',
    title: 'Dia Internacional de Conscientização sobre o Albinismo',
    category: 'Sociedade',
    description: 'Amplia visibilidade sobre direitos, saúde e combate ao estigma enfrentado por pessoas com albinismo.'
  },
  {
    id: '71',
    date: '06-15',
    title: 'Dia Mundial da Conscientização Contra o Abuso de Idosos',
    category: 'Sociedade',
    description: 'Promove proteção, cuidado e respeito às pessoas idosas, com foco na prevenção de violências e negligência.'
  },
  {
    id: '72',
    date: '06-18',
    title: 'Dia Mundial do Orgulho Autista',
    category: 'Sociedade',
    description: 'Celebra a neurodiversidade e defende aceitação social, acessibilidade e protagonismo de pessoas autistas.'
  },
  {
    id: '73',
    date: '06-27',
    title: 'Dia Internacional das Pessoas Surdocegas',
    category: 'Sociedade',
    description: 'Dá visibilidade às especificidades da surdocegueira e à necessidade de recursos de comunicação e apoio.'
  },
  {
    id: '74',
    date: '06-28',
    title: 'Dia Internacional do Orgulho LGBTQIAPN+',
    category: 'Sociedade',
    description: 'Celebra diversidade, memória de luta e direitos civis da população LGBTQIAPN+.'
  },
  {
    id: '75',
    date: '07-14',
    title: 'Dia da Liberdade de Pensamento',
    category: 'Sociedade',
    description: 'Reforça a livre manifestação de ideias e o respeito ao pluralismo em uma sociedade democrática.'
  },
  {
    id: '76',
    date: '07-24',
    title: 'Comemoração da Lei de Cotas',
    category: 'Educação',
    description: 'Marca avanços na democratização do acesso à educação e no enfrentamento de desigualdades históricas.'
  },
  {
    id: '77',
    date: '07-25',
    title: 'Dia Internacional da Mulher Negra Latino-Americana e Caribenha',
    category: 'Sociedade',
    description: 'Valoriza trajetórias, lideranças e direitos de mulheres negras na América Latina e Caribe.'
  },
  {
    id: '78',
    date: '07-25',
    title: 'Dia Nacional de Tereza de Benguela e da Mulher Negra',
    category: 'Sociedade',
    description: 'Homenageia a resistência de Tereza de Benguela e destaca o protagonismo histórico das mulheres negras.'
  },
  {
    id: '79',
    date: '07-26',
    title: 'Dia do Intérprete de LIBRAS',
    category: 'Educação',
    description: 'Reconhece profissionais que atuam na mediação linguística e no acesso à informação para pessoas surdas.'
  },
  {
    id: '80',
    date: '08-07',
    title: 'Promulgação da Lei da Maria da Penha',
    category: 'Sociedade',
    description: 'Marco legal de enfrentamento à violência doméstica e familiar contra a mulher no Brasil.'
  },
  {
    id: '81',
    date: '08-09',
    title: 'Dia Internacional dos Povos Indígenas',
    category: 'Sociedade',
    description: 'Chama atenção para direitos, proteção territorial e valorização das culturas indígenas.'
  },
  {
    id: '82',
    date: '08-21',
    title: 'Semana Nacional da Pessoa com Deficiência Intelectual e Múltipla',
    category: 'Sociedade',
    description: 'Estimula campanhas de inclusão, autonomia e garantia de direitos para pessoas com deficiência intelectual e múltipla.'
  },
  {
    id: '83',
    date: '08-29',
    title: 'Dia Nacional da Visibilidade Lésbica',
    category: 'Sociedade',
    description: 'Promove reconhecimento, respeito e direitos das mulheres lésbicas na sociedade.'
  },
  {
    id: '84',
    date: '08-30',
    title: 'Dia Nacional de Conscientização sobre a Esclerose Múltipla',
    category: 'Ciência',
    description: 'Amplia conhecimento sobre a doença, diagnóstico precoce e qualidade de vida de pessoas com esclerose múltipla.'
  },
  {
    id: '85',
    date: '09-05',
    title: 'Dia Internacional da Mulher Indígena',
    category: 'Sociedade',
    description: 'Destaca a liderança e a contribuição de mulheres indígenas na defesa de territórios, cultura e direitos.'
  },
  {
    id: '86',
    date: '09-09',
    title: 'Dia Internacional dos Povos Indígenas',
    category: 'Sociedade',
    description: 'Reforça visibilidade internacional dos povos indígenas e o compromisso com sua proteção e autodeterminação.'
  },
  {
    id: '87',
    date: '09-10',
    title: 'Dia Mundial de Prevenção do Suicídio',
    category: 'Sociedade',
    description: 'Incentiva acolhimento, cuidado em saúde mental e estratégias de prevenção do suicídio.'
  },
  {
    id: '88',
    date: '09-17',
    title: 'Dia Nacional de Conscientização sobre as Distrofias Musculares',
    category: 'Ciência',
    description: 'Promove informação sobre diagnóstico, reabilitação e direitos das pessoas com distrofias musculares.'
  },
  {
    id: '89',
    date: '09-21',
    title: 'Dia Nacional de Luta da Pessoa com Deficiência',
    category: 'Sociedade',
    description: 'Fortalece o debate sobre acessibilidade, inclusão e garantia de direitos das pessoas com deficiência.'
  },
  {
    id: '90',
    date: '09-23',
    title: 'Dia Internacional das Línguas de Sinais',
    category: 'Educação',
    description: 'Valoriza as línguas de sinais e sua centralidade para comunicação, cultura e participação social de pessoas surdas.'
  },
  {
    id: '91',
    date: '09-26',
    title: 'Dia Nacional do Surdo',
    category: 'Sociedade',
    description: 'Destaca identidade, cultura surda e direitos linguísticos da comunidade surda brasileira.'
  },
  {
    id: '92',
    date: '10-01',
    title: 'Dia Nacional do Idoso e Dia Internacional da Terceira Idade',
    category: 'Sociedade',
    description: 'Incentiva envelhecimento ativo, respeito intergeracional e políticas de proteção para pessoas idosas.'
  },
  {
    id: '93',
    date: '10-10',
    title: 'Dia Mundial da Saúde Mental',
    category: 'Sociedade',
    description: 'Chama atenção para prevenção, tratamento e combate ao estigma relacionado ao sofrimento psíquico.'
  },
  {
    id: '94',
    date: '10-11',
    title: 'Dia Nacional da Pessoa com Deficiência Física',
    category: 'Sociedade',
    description: 'Promove acessibilidade, autonomia e garantia de direitos das pessoas com deficiência física.'
  },
  {
    id: '95',
    date: '10-24',
    title: 'Dia Mundial de Combate à Poliomielite',
    category: 'Ciência',
    description: 'Reforça a importância da vacinação e vigilância em saúde para erradicação da poliomielite.'
  },
  {
    id: '96',
    date: '10-25',
    title: 'Dia Nacional do Combate ao Preconceito contra as Pessoas com Nanismo',
    category: 'Sociedade',
    description: 'Combate estigmas e incentiva respeito, visibilidade e inclusão de pessoas com nanismo.'
  },
  {
    id: '97',
    date: '11-10',
    title: 'Dia Nacional de Prevenção e Combate à Surdez',
    category: 'Sociedade',
    description: 'Promove prevenção em saúde auditiva, diagnóstico precoce e acesso a recursos de comunicação inclusivos.'
  },
  {
    id: '98',
    date: '11-20',
    title: 'Dia Nacional de Zumbi e da Consciência Negra',
    category: 'Sociedade',
    description: 'Valoriza a história de resistência negra e fortalece ações de enfrentamento ao racismo estrutural.'
  },
  {
    id: '99',
    date: '11-25',
    title: 'Dia Internacional pela Eliminação da Violência contra a Mulher',
    category: 'Sociedade',
    description: 'Mobiliza ações de prevenção, proteção e responsabilização contra todas as formas de violência de gênero.'
  },
  {
    id: '100',
    date: '12-03',
    title: 'Dia Internacional das Pessoas com Deficiência',
    category: 'Sociedade',
    description: 'Fortalece agendas de acessibilidade, inclusão e participação plena de pessoas com deficiência.'
  },
  {
    id: '101',
    date: '12-05',
    title: 'Dia Nacional da Acessibilidade',
    category: 'Sociedade',
    description: 'Incentiva eliminação de barreiras arquitetônicas, comunicacionais, atitudinais e tecnológicas.'
  },
  {
    id: '102',
    date: '12-10',
    title: 'Dia Internacional dos Direitos Humanos',
    category: 'Sociedade',
    description: 'Reafirma princípios universais de dignidade, liberdade, igualdade e justiça para todas as pessoas.'
  },
  {
    id: '103',
    date: '12-13',
    title: 'Dia Nacional do Cego',
    category: 'Sociedade',
    description: 'Destaca direitos, autonomia e inclusão de pessoas cegas em educação, trabalho, cultura e mobilidade.'
  }
];

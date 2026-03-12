# Projeto de monitoramento de idosos

> Objetivo: O projeto tem como objetivo criar um aplicativo que monitore os pontos vitais e a saúde do idoso.
>

## Estrutura utilizando Screaming architecture 
 ```
src/
├── profile/
│   ├── domain/
│   │   ├── entities/         
│   │   └── useCases/         
│   ├── data/
│   │   ├── repositories/     
│   │   └── datasources/      
│   └── presentation/
│       ├── screens/          
│       ├── components/       
│       └── viewModels/       
│
├── monitoring/
│   ├── domain/
│   │   ├── entities/         
│   │   └── useCases/         
│   ├── data/
│   │   ├── repositories/     
│   │   └── datasources/      
│   └── presentation/
│       ├── screens/          
│       └── components/       
│
└── shared/
    ├── domain/               
    ├── infra/                
    └── ui/                   
```

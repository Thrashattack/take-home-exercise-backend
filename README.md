# Arena Backend Engineer Take-Home Exercise


* Greetings Everyone! 

- First of all, let me thank you all folks for the opportunity to join your team and for the little push to learn this amazing tool that is GraphQL. 

- Here i'll describe the organization of directories and my projections for architecture and design patterns. 



## Directories 

- The project is organized as following: 

ROOT <br />
|<br />
|----src<br />
|----|<br />
|----|----db<br />
|----|----resolvers<br />
|----|----|----index.js - Module that exports the resolvers itself joining querys and mutations.<br />
|----|----|----mutation.js - Module that exports the mutations specifieds in the Type Definitions.<br />
|----|----|----query.js - Module that exports the querys specifieds in the Type Definitions.<br />
|----|----tests<br />
|----|----|----playgroundRequests.snapshot.txt - Text file containing the requests used to test the server at the playground.<br />
|----|----typedefs<br />
|----|----|----index.js - Module that exports the Type Definitions such as types, mutations and querys.<br />
|----|----webserver<br />
|----|----|----index.js - Entrypoint of the application, the one that put all together.<br />
|----Dockerfile - Bonus :D<br />


## Projections 

- The Resolvers, Typedefs and the Entrypoint could be transformed in factories to achiev dependency inversion and be able to inject dependencies
- When dependencies can be injected automated tests can be developed to achiev TDD (2 days to develop them) 
- Typescript could enhance the architecture

## Enjoy it 

> $ chmod +x ./build.sh && ./build.sh <br />
* Builds and run the project in a detached interative docker container named graphqlex. <br />
> :warning: **Your user must have permission to run docker**: otherwise edit build.sh and add sudo before docker build and docker run <br />
<br />

> $ npm run setup && npm run watch <br />
* Runs the project normally <br />
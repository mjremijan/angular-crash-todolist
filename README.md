# AngularCrashTodolist

Brad. [Traversy Media]. (2019, January 23). Angular Crash Course - 2019 [Video file]. Retrieved from <https://www.youtube.com/watch?v=Fdf5aTYRW0E>


# NetBeans 

TypeScript plugin: <https://github.com/Everlaw/nbts>

Netbeans support didn't work very well. Stick to VSCode.

# Which version?

AngularJS // OLD!

Angular   // Rewrite that covers 2-8++

# Setup commands

```text
C:\>npm --version

	5.6.0
```

```text
C:\>npm install -g @angular/cli@7.0
```

```text
C:\>ng --version	
	     _                      _                 ____ _     ___
	    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
	   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
	  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
	 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
	                |___/
		
	Angular CLI: 7.0.7
	Node: 8.11.3
	OS: win32 x64
	Angular:
	...
	
	Package                      Version
	------------------------------------------------------
	@angular-devkit/architect    0.10.7
	@angular-devkit/core         7.0.7
	@angular-devkit/schematics   7.0.7
	@schematics/angular          7.0.7
	@schematics/update           0.10.7
	rxjs                         6.3.3
	typescript                   3.1.6
```

# Create Angular project

```text
C:\>ng new angular-crash-todolist
```

# Run node to serve project

```text
C:\>ng serve --open
```

# Angular files

## app.module.ts

* Entry point of the Angular application
* declarations:
    * Where your components go
    * New components need to be added here
        * Use cli to generate new components
* imports:
    * When you need to use a module
* providers:
    * Services
* bootstrap:
    * Set the starting component
		
## app.component.ts
* selector: 'app-root'
    * The 'app-root' value matches the \<app-root>\</app-root> tag in the html file. The component will be drawn at that tag.
* templateUrl: './app.component.html'
    * This is the html of this component. This html will replace the <app-root> tag.
* styleUrls: \['./app.component.css'\]
    * This is the css of this html. All components inherit from src/styles.css but each component can override or create new styles.

# Generate component

```text
C:\>ng generate component components/Todos
```
* Verify in app/app.module.ts that TodosComponent has been added automatically.


# Generate service

```text
C:\>ng generate service services/Todo
```
* Verify src/app/services/todo.service.ts was created.

# REST call by HttpClientModule

Edit `app.modules.ts`.

```text
import { HttpClientModule } from '@angular/common/http';
.
.
.
imports: [
	BrowserModule,
	AppRoutingModule,
	HttpClientModule
]
```



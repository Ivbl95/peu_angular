export const angular: string = `
<article>
<div>Routing</div>
<pre>
&lt;base href="/"&gt; // Пишется в head в index.html, подразумевает, что папка app корневая и использует '/'
&lt;router-outlet&gt;&lt;/router-outlet&gt; // Добавить в компонент использования роутинга
</pre>
<div>AppRoutingModule</div>
<pre>
import { NgModule } from '@angular/core'; // Использовать модуль, CLI делает это автоматически
import { Routes, RouterModule } from '@angular/router'; // Импорт роутера, CLI делает это автоматически

const routes: Routes = [ // Массив путей компонентом, CLI делает это автоматически
  { path: 'first-component', component: FirstComponent }, // Объект с путем и компонентом назначения
  { path: 'second-component', component: SecondComponent },
];

@NgModule({ // Настройка импорта/экспорта, CLI делает это автоматически
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } // Экспорт класса, CLI делает это автоматически

// Важен порядок имплементации в список Routes - 1. Static path, 2. Empty path'', 3. Wildcart**
</pre>
<div>Any component</div>
<pre>
&lt;h1&gt;Angular Router App&lt;/h1&gt;
&lt;a routerLink="/first-component" routerLinkActive="active" ariaCurrentWhenActive="page"&gt;First&lt;/a&gt; // Ссылка для отображения компонента
&lt;a routerLink="/second-component" routerLinkActive="active" ariaCurrentWhenActive="page"&gt;Second&lt;/a&gt;
&lt;router-outlet&gt;&lt;/router-outlet&gt; // Добавить в компонент использования роутинга
</pre>
<div>ActivatedRoute => this.route.params</div>
<pre>
{ path: 'second/:id', component: SecondComponent } // Передавать id при роутинге (AppRoutingModule)

&lt;a [routerLink]="['/second', '12']" routerLinkActive="active" ariaCurrentWhenActive="page"&gt;Second&lt;/a&gt; // 12 - это id который записывается в params

constructor(private route: ActivatedRoute) {} // Чтобы юзать ActivatedRoute
ngOnInit() {
  this.route.params.subscribe((params) => { // Получить данные из ActivatedRoute.params
    this.id = params['id']; // 12
  });
}
</pre>
<div>ActivatedRoute => this.route.queryParams</div>
<pre>
&lt;a [queryParams]='{ id: 12 }' routerLink="/second" routerLinkActive="active" ariaCurrentWhenActive="page"&gt;Second&lt;/a&gt; // 12 - это id который записывается в params

constructor(private route: ActivatedRoute) {} // Чтобы юзать ActivatedRoute
ngOnInit() {
  this.route.queryParams.subscribe((params) => { // Получить данные из ActivatedRoute.queryParams
    this.id = params['id']; // 12
  });
}
</pre>
</article>
`

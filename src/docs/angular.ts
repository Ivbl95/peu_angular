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
<div>wildcart/404</div>
<pre>
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '**', component: MyPage }, // WildCart
];
// ** cовпадает со всеми url
// должен быть в конце массива routes
// component принимает компонент, куда будет переход при необработанном url
</pre>
<div>RedirectTo</div>
<pre>
const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'bye', component: ByeComponent },
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
];
// Redirecting from empty path to HelloComponent
</pre>
<div>Nested components</div>
<pre>
const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent,
    children: [
      { path: 'child-a', component: ChildAComponent },
      { path: 'child-b', component: ChildBComponent },
    ],
  },
];
// This is way to create children's route

&lt;h2&gt;First Component&lt;/h2&gt;
&lt;a routerLink="child-a"&gt;Child A&lt;/a&gt;
&lt;a routerLink="child-b"&gt;Child B&lt;/a&gt;
&lt;router-outlet&gt;&lt;/router-outlet&gt;
// This is way to go each child
</pre>
<div>Title</div>
<pre>
const routes: Routes = [
  {
    path: 'first-component',
    title: 'First component',
    component: FirstComponent,
  },
];
// Title is a name which we can pass to ActivatedRoute

this.route.title.subscribe((title) => {
  this.title = title;
});
// Retrieving a title from ActivatedRoute
</pre>
</article>
`

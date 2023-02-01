export const angular: string = `
<article>
<div>Pre-rules of Routing</div>
<pre>
&lt;base href="/"&gt;
<span>// Пишется в head в index.html, подразумевает, что папка app корневая и использует '/'</span>
</pre>
<div>Example of AppRoutingModule file</div>
<pre>
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<span>// RouterModule позволяет использовать навигацию между компонентами</span>

const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
];
<span>// Массив определений для роутинга</span>
<span>// Каждый объект содержит инструкцию о роутинге</span>
<span>// Каждый объект имеет path (matcher) и component</span>

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<span>// RouterModule.forRoot() - паттерн для регистрации провайдинга</span>
<span>// RouterModule.forRoot() делает правила из массива routes доступными всему приложению</span>

export class AppRoutingModule {}
<span>// Экспорт класса AppRoutingModule для импорта его в AppModule</span>
</pre>
<div>routerLink</div>
<pre>
&lt;h1&gt;Angular Router App&lt;/h1&gt;
&lt;a
    routerLink="/first"
    routerLinkActive="activebutton"
    ariaCurrentWhenActive="page"
&gt;First&lt;/a&gt;
&lt;router-outlet&gt;&lt;/router-outlet&gt;
<span>// routerLink - путь назначения роутинга</span>
<span>// routerLinkActive - актиный класс css, когда мы в текущем расположении</span>
<span>// ariaCurrentWhenActive - надстройка для слабовидящих</span>
<span>// router-outlet - здесь отображается результат роутинга (вью новой страницы)</span>
</pre>
<div>ActivatedRoute.params</div>
<pre>
{ path: 'second/:id', component: SecondComponent }
<span>// Передавать id при роутинге</span>

&lt;a [routerLink]="['/second', 1]"&gt;Second&lt;/a&gt;
<span>// 1 - это id для передачи в params</span>

this.route.params.subscribe((params) => {
  this.id = params['id'];
});
<span>// Получение данных из ActivatedRoute.params</span>
</pre>
<div>ActivatedRoute.queryParams</div>
<pre>
&lt;a [queryParams]='{ id: 1 }' routerLink="/second"&gt;Second&lt;/a&gt;
<span>// Объект записывается в queryParams</span>

this.route.queryParams.subscribe((params) => {
  this.id = params['id'];
});
<span>// Получение данных из ActivatedRoute.queryParams</span>
</pre>
<div>Wildcart, Redirect, Title</div>
<pre>
{ path: 'first', component: FirstComponent, title: 'First Component', },
<span>// title - заголовок объекта, ActivatedRoute.Title</span>

{ path: '', redirectTo: '/first', pathMatch: 'full' },
<span>// Редирект из '' в '/first'</span>

{ path: '**', component: PageNotFound },
<span>// WildCart ** cовпадает со всеми url, должен быть в конце массива routes</span>

<span>// Важен порядок имплементации в список Routes - 1. Static path, 2. Empty path'', 3. Wildcart**</span>
</pre>
<div>Children</div>
<pre>
{
  path: 'first',
  component: FirstComponent,
  children: [ { path: 'child', component: ChildAComponent } ],
},
<span>// children - массив объектов инструкций для дочерних компонентов FirstComponent</span>
</pre>
<div>Relative Path</div>
<pre>
&lt;a routerLink='../comp'&gt;Comp&lt;a&gt;
<span>// Если компоненты на одном уровне, './' - если дочерний</span>

this.router.navigate(['../comp'], { relativeTo: this.route });
<span>// Относительный путь при навигации при помощи this.router.navigate</span>
</pre>
<div>Matcher</div>
<pre>
matcher: (url) => {
  if (url.length === 1 && url[0]...) {
    return {
      consumed: url,
      posParams: { username: new UrlSegment(url[0].path.slice(1), { /* parameters */ }) }
    };
  }
  return null;
}
<span>// Использование Matcher вместо Path</span>
<span>// UrlSegment - функция для сравнения ссылок</span>
<span>// Слеш - это разделитель элементов массива url</span>
</pre>
</article>
`

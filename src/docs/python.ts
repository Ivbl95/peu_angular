export const python: string = `
<article>
<div>Class</div>
<pre>
class FirstClass:  # Каждое слово в имени класса с большой буквы
    pass  # Заполняет пустоту чтобы не было ошибки

first_instance = FirstClass()  # Создать экземпляр класса

class SecondClass:
    def __init__(self, arg1, arg2):  # Конструктор класса принимает в себя новосозданный экземпляр (self) и два аргумента
        self.arg1 = arg1
        self.arg2 = arg2  # Присвоение данных в новосозданный экземпляр из аргументов, переданных при создании экземпляра

second_instance = SecondClass('data_for_arg1', 'data_for_arg2')  # Создать экземпляр класса и передать данные в конструктор

class ThirdClass:
    def __init__(self, arg1=15):  # 15 - значение по умолчанию
        self.arg1 = arg1

third_instance = ThirdClass()  # Можно не передавать значение, если есть значение по умолчанию, иначе ошибка
</pre>
<div>Mixins</div>
<pre>
class Animal:  # Базовый класс
    pass

class RunMixin:  # Миксин может подмешиваться в классы для расширения списка доступных атрибутов и методов
    def run(self):
        print('I run')

class Human(Animal, RunMixin):  # Дочерний класс от Animal с миксином RunMixin
    pass

class Cat(Animal, RunMixin):  # Дочерний класс от Animal с миксином RunMixin
    pass

class Elefant(Animal):  # Дочерний класс от Animal без миксина RunMixin
    pass

ivan = Human()
barsik = Cat()
tosha = Elefant()

ivan.run()
barsik.run()
# Экземпляр tosha не имеет доступа к методу run, так как миксин не подмешан в его класс
# tosha.run()
</pre>
<div>Abstract base class</div>
<pre>
from abc import ABC  # Импорт базового класса ABC для использования абстрактного класса
from abc import abstractmethod  # Импорт декоратора @abstractmethod

class ElectronicDevice(ABC):  # Наследование от ABC создает ограничение для создания экземпляра класса ElectronicDevice
    def __init__(self):
        super().__init__()  # Вызов конструктора ABC

    @abstractmethod  # Декоратор обязывает переопределять метод в наследниках
    def orientation(self):
        return ['portrait', 'landscape']

    def count_of_core(self):  # Метод без декоратора переопределять не обязательно, но можно
        return 1

class Mobile(ElectronicDevice):  # Дочерний класс от ElectronicDevice
    def orientation(self):
        return super().orientation()  # Можно брать значения из абстрактного класса, главное переопределен

class Computer(ElectronicDevice):  # Дочерний класс от ElectronicDevice
    def orientation(self):
        return ['portrait']

    def count_of_core(self):
        return 8

iphone = Mobile()
acer = Computer()
# Нельзя создать экземпляр абстрактного класса
# device = ElectronicDevice()
</pre>
</article>
`;

export const python: string = `
<div id="mixin" class="chapter">Mixins</div>
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
<div id="abc" class="chapter">Abstract base class</div>
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
`;

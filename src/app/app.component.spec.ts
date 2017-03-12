import {AppComponent} from './app.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, Component, NgModule} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';

@Component({
    template: ''
})
class MockLoginComponent {
}

@NgModule({
    declarations: [MockLoginComponent],
    exports: [MockLoginComponent]
})
class MockModule {
}

describe('AppComponent', function () {
    let de: DebugElement;
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [
                MockModule,
                RouterTestingModule.withRoutes([
                    {
                        path: 'login',
                        component: MockLoginComponent
                    }
                ]),
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should have expected <h1> text', () => {
        fixture.detectChanges();
        const h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/Heroes/i,
            '<h1> should say something about "Heroes"');
    });
});
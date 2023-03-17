import React from "react";
import { act, create } from 'react-test-renderer';
import TodoForm from '../Components/TodoForm';

jest.mock("../Components/utils/DateCreated", () => {
    return function MockDateCreated() {
        return <span testid="dateCreated">Date Created Component</span>
    }
});


describe('TodoForm test suite', () => {
    let submitTodo;
    beforeEach(() => {
        submitTodo = jest.fn();
    });
    describe('DateCreated function and render tests', () => {
        test('Testing form', () => {
            const testRenderer = create(<TodoForm submitTodo={submitTodo}/>);
            const testInstance = testRenderer.root;
            const dateCreated = testInstance.find(
                el => el.type === 'span' && el.props.testid === 'dateCreated'
            );
            expect(dateCreated).toBeTruthy();
            expect(dateCreated.children).toContain('Date Created Component')
        });
    });
        describe('onCHange event tests', () => {
        test('it should render the new value onChange', () => {
            const testValue = "Test";
            const testRenderer = create(<TodoForm submitTodo={submitTodo}/>);
            const testInstance = testRenderer.root;
            const descInput = testInstance.findByProps({name: "todoDescription"});
            expect(descInput.props.value).toBe("");
            act(() => descInput.props.onChange({target: {value: testValue}}));
            expect(descInput.props.value).toBe(testValue);
        });
        test('should render the new value in the checkbox', () => {
            const testValue = true;
            const testRenderer = create (<TodoForm submitTodo={submitTodo}/>);
            const testInstance = testRenderer.root;
            const completedInput = testInstance.findByProps({ name: "todoCompleted"});
            expect(completedInput.props.checked).toEqual(false);
            act(() => completedInput.props.onChange(
                {target: { checked: testValue}})
            );
            expect(completedInput.props.checked).toBe(testValue);
        });
        })
        describe('Form submission tests', () => {
            test('it should call a submitTodo with parameters on submission', async () => {
                const testRenderer = create (<TodoForm submitTodo={submitTodo}/>);
                const testInstance = testRenderer.root;
                const descInput = testInstance.findByProps({
                    name: "todoDescription" });
                const descTestValue = "Test";
                const compTestValue = false;
                const completedInput = testInstance.findByProps(
                    { name: "todoCompleted"}
                );
                const form = testInstance.findByType('form');
                await act(async () => completedInput.props.onChange(
                    { target: { checked: compTestValue}}
                ));
                await act(async ()=> descInput.props.onChange( { target: { value: descTestValue}}));
                await act(async () => form.props.onSubmit(new Event(`form`)));
                expect(submitTodo).toHaveBeenCalledTimes(1);
                expect(submitTodo).toHaveBeenCalledWith(descTestValue, null, compTestValue); 
            });  
        })
    });



    
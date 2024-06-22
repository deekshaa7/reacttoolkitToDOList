import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",

    initialState:{
        task:[]
    },
    
    reducers:{
        addTask:(state,action)=>{
        state.task.push(action.payload)
         } ,
         deleteTask:(state,action)=>{
            state.task=state.task.filter(key=>key.id!==action.payload.id)
         },
         completeTask:(state,action)=>{
            for (var i=0; i<state.task.length; i++){
                if (state.task[i].id==action.payload.id){
                    state.task[i].status=false;
                }
            }

         },
         reopenTask:(state,action)=>{
            for (var i=0; i<state.task.length; i++){
                if (state.task[i].id==action.payload.id){
                    state.task[i].status=true;
                }
            }

         },
         editdataSave:(state,action)=>{
            for (var i=0; i<state.task.length; i++){
                if (state.task[i].id==action.payload.id){
                    state.task[i].work=action.payload.work;
                }
            }

         }
    }

})
export const{addTask,deleteTask,completeTask,reopenTask,editdataSave}=todoSlice.actions;
export default todoSlice.reducer;

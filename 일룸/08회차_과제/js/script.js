// // // 모든 .tech 요소와 .tech_list 요소를 가져오기
// // const techItems = document.querySelectorAll('.tech');
// // const techListItems = document.querySelectorAll('.tech_list');

// // techListItems.forEach((item, index) => {
// //     item.addEventListener('mouseover', function() {
// //         // 모든 .tech 요소 숨기기
// //         techItems.forEach(tech => {
// //             tech.style.display = 'none';
// //         });

// //         // 현재 hover된 .tech_list의 인덱스에 해당하는 .tech 요소 표시하기
// //         techItems[index].style.display = 'block';
// //     });

// //     // 마우스가 .tech_list에서 벗어났을 때 모든 .tech 요소를 숨기기
// //     item.addEventListener('mouseout', function() {
// //         techItems[index].style.display = 'none';
// //     });
// // });


// $('.tech_list').on('mouseover',function(){
//     $('.tech').eq(0).css('opacity', 1);
//     $('.tech').eq(1).css('opacity', 0);
//     $('.tech').eq(2).css('opacity', 0);
//     $('.tech').eq(3).css('opacity', 0);
// })

// $('.tech_list').on('mouseover',function(){
//     $('.tech').eq(0).css('opacity', 1);
//     $('.tech').eq(0).siblings().css('opacity', 0);
// });
// $('.tech_list').on('mouseout',function(){
//     $('.tech').eq(0).css('opacity', 1);
//     $('.tech').eq(0).siblings().css('opacity', 0);
// });
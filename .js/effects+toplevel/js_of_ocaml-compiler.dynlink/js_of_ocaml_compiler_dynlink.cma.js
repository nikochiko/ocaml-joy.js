// Generated by js_of_ocaml
//# buildInfo:effects=true, kind=cma, use-js-string=true, version=5.7.1+5.7.1

//# unitInfo: Provides: Js_of_ocaml_compiler_dynlink
//# unitInfo: Requires: Js_of_ocaml_compiler__Config, Js_of_ocaml_compiler__Driver, Js_of_ocaml_compiler__Instr, Js_of_ocaml_compiler__Ocaml_compiler, Js_of_ocaml_compiler__Ocaml_version, Js_of_ocaml_compiler__Pretty_print, Js_of_ocaml_compiler__Stdlib, Jsoo_runtime, Stdlib, Stdlib__Format
//# unitInfo: Force_link: true
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    caml_callback = runtime.caml_callback;
   function caml_cps_call2(f, a0, a1){
    return runtime.caml_stack_check_depth()
            ? (f.l
                >= 0
                ? f.l
                : f.l = f.length)
              == 2
              ? f(a0, a1)
              : runtime.caml_call_gen(f, [a0, a1])
            : runtime.caml_trampoline_return(f, [a0, a1]);
   }
   function caml_cps_call3(f, a0, a1, a2){
    return runtime.caml_stack_check_depth()
            ? (f.l
                >= 0
                ? f.l
                : f.l = f.length)
              == 3
              ? f(a0, a1, a2)
              : runtime.caml_call_gen(f, [a0, a1, a2])
            : runtime.caml_trampoline_return(f, [a0, a1, a2]);
   }
   function caml_cps_call4(f, a0, a1, a2, a3){
    return runtime.caml_stack_check_depth()
            ? (f.l
                >= 0
                ? f.l
                : f.l = f.length)
              == 4
              ? f(a0, a1, a2, a3)
              : runtime.caml_call_gen(f, [a0, a1, a2, a3])
            : runtime.caml_trampoline_return(f, [a0, a1, a2, a3]);
   }
   function caml_cps_call5(f, a0, a1, a2, a3, a4){
    return runtime.caml_stack_check_depth()
            ? (f.l
                >= 0
                ? f.l
                : f.l = f.length)
              == 5
              ? f(a0, a1, a2, a3, a4)
              : runtime.caml_call_gen(f, [a0, a1, a2, a3, a4])
            : runtime.caml_trampoline_return(f, [a0, a1, a2, a3, a4]);
   }
   function caml_cps_call6(f, a0, a1, a2, a3, a4, a5){
    return runtime.caml_stack_check_depth()
            ? (f.l
                >= 0
                ? f.l
                : f.l = f.length)
              == 6
              ? f(a0, a1, a2, a3, a4, a5)
              : runtime.caml_call_gen(f, [a0, a1, a2, a3, a4, a5])
            : runtime.caml_trampoline_return(f, [a0, a1, a2, a3, a4, a5]);
   }
   runtime.jsoo_create_file
    ("/static/cmis/js_of_ocaml_compiler_dynlink.cmi",
     "Caml1999I032\x84\x95\xa6\xbe\0\0\0\x1f\0\0\0\x02\0\0\0\f\0\0\0\b\xa0<Js_of_ocaml_compiler_dynlink@\x84\x95\xa6\xbe\0\0\0z\0\0\0\x0f\0\0\0>\0\0\x000\xa0\xa0<Js_of_ocaml_compiler_dynlink\x900\xffL\xd1\x93\xd2\xf6\xe1-\xe7\x1eM\xbdS\x1e\x8c\x0b\xa0\xa0&Stdlib\x900\x85\xf8]\xdbG\xed\xc0\xc7W\x96W\xee\xe7@0-\xa0\xa08CamlinternalFormatBasics\x900\xce\xcf\xaf\xd5\xc0!G?^5\x8c\x96\xacu\x02\xa0@\x84\x95\xa6\xbe\0\0\0\x04\0\0\0\x02\0\0\0\x05\0\0\0\x05\xa0\x90@@");
   var
    global_data = runtime.caml_get_global_data(),
    Js_of_ocaml_compiler_Stdlib = global_data.Js_of_ocaml_compiler__Stdlib,
    Js_of_ocaml_compiler_Ocaml_com =
      global_data.Js_of_ocaml_compiler__Ocaml_compiler,
    Stdlib_Format = global_data.Stdlib__Format,
    Stdlib = global_data.Stdlib,
    Js_of_ocaml_compiler_Pretty_pr =
      global_data.Js_of_ocaml_compiler__Pretty_print,
    Js_of_ocaml_compiler_Driver = global_data.Js_of_ocaml_compiler__Driver,
    Js_of_ocaml_compiler_Ocaml_ver =
      global_data.Js_of_ocaml_compiler__Ocaml_version,
    Js_of_ocaml_compiler_Instr = global_data.Js_of_ocaml_compiler__Instr,
    Js_of_ocaml_compiler_Config = global_data.Js_of_ocaml_compiler__Config,
    global = globalThis,
    _a_ = runtime.caml_jsoo_flags_use_js_string(0);
   caml_callback(Js_of_ocaml_compiler_Config[1][3], ["use-js-string", _a_]);
   var _b_ = runtime.caml_jsoo_flags_effects(0);
   caml_callback(Js_of_ocaml_compiler_Config[1][3], ["effects", _b_]);
   function toplevel_compile(code, debug, cont){
    var _h_ = Js_of_ocaml_compiler_Ocaml_ver[4];
    function _i_(s){
     return caml_cps_call2
             (Js_of_ocaml_compiler_Ocaml_com[3][5],
              0,
              function(_m_){
               return caml_cps_call2
                       (Js_of_ocaml_compiler_Stdlib[46][10],
                        _m_,
                        function(prims){
                         return caml_cps_call2
                                 (Js_of_ocaml_compiler_Stdlib[34][1],
                                  100,
                                  function(b){
                                   return caml_cps_call2
   (Js_of_ocaml_compiler_Pretty_pr[11],
    b,
    function(fmt){
     return caml_cps_call2
             (Js_of_ocaml_compiler_Driver[4],
              fmt,
              function(_n_){
               return caml_cps_call5
                       (Js_of_ocaml_compiler_Driver[3],
                        prims,
                        debug,
                        s,
                        fmt,
                        function(_o_){
                         return caml_cps_call3
                                 (Stdlib_Format[38],
                                  Stdlib_Format[110],
                                  0,
                                  function(_p_){
                                   return caml_cps_call3
   (Stdlib_Format[38],
    Stdlib_Format[112],
    0,
    function(_q_){
     return caml_cps_call2
             (Stdlib[63],
              Stdlib[39],
              function(_r_){
               return caml_cps_call2
                       (Stdlib[63],
                        Stdlib[40],
                        function(_s_){
                         return caml_cps_call2
                                 (Js_of_ocaml_compiler_Stdlib[34][2],
                                  b,
                                  function(js){
                                   var res = global.toplevelEval;
                                   return caml_cps_call2(res, js, cont);
                                  });
                        });
              });
    });
                                  });
                        });
              });
    });
                                  });
                        });
              });
    }
    return 667316832 <= _h_
            ? 667316834
              <= _h_
              ? caml_cps_call2
                (Js_of_ocaml_compiler_Instr[1],
                 40,
                 function(match){
                  var
                   opcode = match[4],
                   len = runtime.caml_ml_string_length(code),
                   b = runtime.caml_create_bytes(len + 8 | 0);
                  return caml_cps_call6
                          (Js_of_ocaml_compiler_Stdlib[35][11],
                           code,
                           0,
                           b,
                           0,
                           len,
                           function(_j_){
                            return caml_cps_call4
                                    (Js_of_ocaml_compiler_Stdlib[35][82],
                                     b,
                                     len,
                                     opcode,
                                     function(_k_){
                                      return caml_cps_call4
      (Js_of_ocaml_compiler_Stdlib[35][82],
       b,
       len + 4 | 0,
       1,
       function(_l_){
        return caml_cps_call2
                (Js_of_ocaml_compiler_Stdlib[35][6], b, _i_);
       });
                                     });
                           });
                 })
              : _i_(code)
            : _i_(code);
   }
   function toplevel_eval(x, cont){
    var f = runtime.caml_js_eval_string(x);
    return cont
            (function(param, cont){
              var res = f(global);
              return caml_cps_call3
                      (Stdlib_Format[38],
                       Stdlib_Format[110],
                       0,
                       function(_d_){
                        return caml_cps_call3
                                (Stdlib_Format[38],
                                 Stdlib_Format[112],
                                 0,
                                 function(_e_){
                                  return caml_cps_call2
  (Stdlib[63],
   Stdlib[39],
   function(_f_){
    return caml_cps_call2
            (Stdlib[63], Stdlib[40], function(_g_){return cont(res);});
   });
                                 });
                       });
             });
   }
   var
    toc = runtime.caml_dynlink_get_bytecode_sections(0),
    t = toc[1],
    sym =
      caml_callback
       (Js_of_ocaml_compiler_Ocaml_com[3][2][5],
        [function(i, n, acc, cont){
          return caml_cps_call2
                  (Js_of_ocaml_compiler_Ocaml_com[3][1][1],
                   i,
                   function(_c_){
                    return caml_cps_call4
                            (Js_of_ocaml_compiler_Stdlib[42][4], _c_, n, acc, cont);
                   });
         },
         t,
         Js_of_ocaml_compiler_Stdlib[42][1]]);
   function toplevel_reloc(name, cont){
    var name$0 = runtime.caml_string_of_jsstring(name);
    return caml_cps_call3
            (Js_of_ocaml_compiler_Stdlib[42][29],
             name$0,
             sym,
             function(match){
              if(! match)
               return caml_cps_call2
                       (Js_of_ocaml_compiler_Ocaml_com[3][3], name$0, cont);
              var i = match[1];
              return cont(i);
             });
   }
   global.toplevelCompile = toplevel_compile;
   global.toplevelEval = toplevel_eval;
   global.toplevelReloc = toplevel_reloc;
   var Js_of_ocaml_compiler_dynlink = [0];
   runtime.caml_register_global
    (17, Js_of_ocaml_compiler_dynlink, "Js_of_ocaml_compiler_dynlink");
   return;
  }
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJqc19vZl9vY2FtbF9jb21waWxlcl9keW5saW5rLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJnbG9iYWwiLCJ0b3BsZXZlbF9jb21waWxlIiwiY29kZSIsImRlYnVnIiwicyIsInByaW1zIiwiYiIsImZtdCIsImpzIiwicmVzIiwib3Bjb2RlIiwibGVuIiwidG9wbGV2ZWxfZXZhbCIsIngiLCJmIiwidG9jIiwidCIsInN5bSIsImkiLCJuIiwiYWNjIiwidG9wbGV2ZWxfcmVsb2MiLCJuYW1lIiwibmFtZSQwIl0sInNvdXJjZXMiOlsiL1VzZXJzL2thdXN0dWJoL0Rlc2t0b3AvcHJvamVjdHMvb2NhbWwtcmV0cmVhdC9vY2FtbC5vcmcvcGxheWdyb3VuZC9fb3BhbS9saWIvanNfb2Zfb2NhbWwtY29tcGlsZXIvZHlubGluay9qc19vZl9vY2FtbF9jb21waWxlcl9keW5saW5rLm1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Rzs7Ozs7Ozs7Ozs7Rzs7Ozs7Ozs7Ozs7Rzs7Ozs7Ozs7Ozs7Rzs7Ozs7Ozs7Ozs7Rzs7Ozs7Ozs7Ozs7Ozs7R0E2QmU7Ozs7Ozs7Ozs7Ozs7O0lBQVRBO0lBQzRCLE1BQUE7R0FBaEM7R0FDMEIsVUFBQTtHQUExQjtZQUVJQyxpQkFBa0JDLE1BQWFDO0lBbEJuQztpQkFvQk1DO0tBQ3NCLE9BQUE7Ozs7ZUFBZCxPQUFBOzs7aUNBQVJDO3lCQUNJLE9BQUE7OzsyQ0FBSkM7bUNBQ00sT0FBQTs7SUFETkE7YUFDQUM7S0FDSixPQUFBOztjQURJQTs7ZUFFSixPQUFBOzt3QkFKSUY7d0JBSDZCRjt3QkFFN0JDO3dCQUdBRzs7eUJBR0ksT0FBQTs7Ozs7bUNBQ0EsT0FBQTs7Ozs7S0FDUixPQUFBOzs7O2VBQ0EsT0FBQTs7Ozt5QkFDUyxPQUFBOztrQ0FSTEQ7MkNBUUFFO21DQUVRLElBRFJDLE1BakJGVDttQ0FvQkYsT0FBQSxlQUhJUyxLQURBRDs7Ozs7Ozs7Ozs7Ozs7OztnQkF6QndCOzs7O2tCQUMxQjttQkFETUU7bUJBQ0ZDLE1BQUosOEJBWWtCVDttQkFYZEksSUFBSSwwQkFESks7a0JBRUosT0FBQTs7MkJBVWtCVDs7MkJBWGRJOzsyQkFEQUs7OzRCQUdKLE9BQUE7O3FDQUZJTDtxQ0FEQUs7cUNBREVEOztzQ0FLTixPQUFBOztPQUhJSjtPQURBSzs7O1FBSUosT0FBQTtxREFISUw7Ozs7O29CQVdjSjtrQkFBQUE7R0FnQkg7R0FFbkIsU0FBSVUsY0FBZUM7SUFDSCxJQUFWQyxJQUFVLDRCQURHRDtJQUVqQjs7Y0FDWSxJQUFOSixNQUZGSyxFQXZCRmQ7Y0EwQlEsT0FBQTs7Ozs7d0JBQ0EsT0FBQTs7Ozs7a0NBQ1IsT0FBQTs7OztJQUNBLE9BQUE7bURBQUEsWUFKSVM7Ozs7YUFLRDtHQUFBO0dBRUc7SUFBTk0sTUFBTTtJQUVKQyxJQUZGRDtJQUNBRTtNQUVGOztrQkFDT0MsR0FBRUMsR0FBRUM7VUFBTyxPQUFjOzttQkFBekJGOztvQkFBVyxPQUFBO3NFQUFUQyxHQUFFQzs7U0FBa0U7U0FGekVKOztHQU1OLFNBQUlLLGVBQWdCQztJQUNQLElBQVBDLFNBQU8sZ0NBRE9EO0lBRVosT0FBQTs7YUFERkM7YUFSRk47O2M7ZUFXUSxPQUFBOzhEQUhOTTtrQkFFR0w7Y0FBSyxZQUFMQTs7R0FDZ0U7R0E1Q3JFbEIseUJBSUFDO0dBSkFELHNCQXNCQVk7R0F0QkFaLHVCQXdDQXFCOzs7OztFIiwic291cmNlc0NvbnRlbnQiOlsib3BlbiBKc19vZl9vY2FtbF9jb21waWxlci5TdGRsaWJcbm9wZW4gSnNfb2Zfb2NhbWxfY29tcGlsZXJcbm1vZHVsZSBKID0gSnNvb19ydW50aW1lLkpzXG5cbnR5cGUgYnl0ZWNvZGVfc2VjdGlvbnMgPVxuICB7IHN5bWIgOiBPY2FtbF9jb21waWxlci5TeW10YWJsZS5HbG9iYWxNYXAudFxuICA7IGNyY3MgOiAoc3RyaW5nICogRGlnZXN0LnQgb3B0aW9uKSBsaXN0XG4gIDsgcHJpbSA6IHN0cmluZyBsaXN0XG4gIDsgZGxwdCA6IHN0cmluZyBsaXN0XG4gIH1cbltAQG9jYW1sLndhcm5pbmcgXCItdW51c2VkLWZpZWxkXCJdXG5cbmV4dGVybmFsIGdldF9ieXRlY29kZV9zZWN0aW9ucyA6IHVuaXQgLT4gYnl0ZWNvZGVfc2VjdGlvbnMgPSBcImpzb29fZ2V0X2J5dGVjb2RlX3NlY3Rpb25zXCJcblxubGV0IG5vcm1hbGl6ZV9ieXRlY29kZSBjb2RlID1cbiAgbWF0Y2ggT2NhbWxfdmVyc2lvbi52IHdpdGhcbiAgfCBgVjRfMDggfCBgVjRfMDkgfCBgVjRfMTAgfCBgVjRfMTEgfCBgVjRfMTIgfCBgVjRfMTMgfCBgVjRfMTQgLT4gY29kZVxuICB8IGBWNV8wMCB8IGBWNV8wMSAtPiBjb2RlXG4gIHwgYFY1XzAyIC0+XG4gICAgICAoKiBzdGFydGluZyB3aXRoIG9jYW1sIDUuMiwgVGhlIHRvcGxldmVsIG5vIGxvbmdlciBhcHBlbmQgW1JFVFVSTiAxXSAqKVxuICAgICAgbGV0IHsgSW5zdHIub3Bjb2RlOyBfIH0gPSBJbnN0ci5maW5kIFJFVFVSTiBpblxuICAgICAgbGV0IGxlbiA9IFN0cmluZy5sZW5ndGggY29kZSBpblxuICAgICAgbGV0IGIgPSBCeXRlcy5jcmVhdGUgKGxlbiArIDgpIGluXG4gICAgICBCeXRlcy5ibGl0X3N0cmluZyB+c3JjOmNvZGUgfnNyY19wb3M6MCB+ZHN0OmIgfmRzdF9wb3M6MCB+bGVuO1xuICAgICAgQnl0ZXMuc2V0X2ludDMyX2xlIGIgbGVuIChJbnQzMi5vZl9pbnQgb3Bjb2RlKTtcbiAgICAgIEJ5dGVzLnNldF9pbnQzMl9sZSBiIChsZW4gKyA0KSAxbDtcbiAgICAgIEJ5dGVzLnRvX3N0cmluZyBiXG5cbmxldCAoKSA9XG4gIGxldCBnbG9iYWwgPSBKLnB1cmVfanNfZXhwciBcImdsb2JhbFRoaXNcIiBpblxuICBDb25maWcuRmxhZy5zZXQgXCJ1c2UtanMtc3RyaW5nXCIgKEpzb29fcnVudGltZS5TeXMuQ29uZmlnLnVzZV9qc19zdHJpbmcgKCkpO1xuICBDb25maWcuRmxhZy5zZXQgXCJlZmZlY3RzXCIgKEpzb29fcnVudGltZS5TeXMuQ29uZmlnLmVmZmVjdHMgKCkpO1xuICAoKiB0aGlzIG5lZWRzIHRvIHN0YXkgc3luY2hyb25pemVkIHdpdGggdG9wbGV2ZWwuanMgKilcbiAgbGV0IHRvcGxldmVsX2NvbXBpbGUgKHMgOiBzdHJpbmcpIChkZWJ1ZyA6IEluc3RydWN0LmRlYnVnX2V2ZW50IGxpc3QgYXJyYXkpIDpcbiAgICAgIHVuaXQgLT4gSi50ID1cbiAgICBsZXQgcyA9IG5vcm1hbGl6ZV9ieXRlY29kZSBzIGluXG4gICAgbGV0IHByaW1zID0gQXJyYXkub2ZfbGlzdCAoT2NhbWxfY29tcGlsZXIuU3ltdGFibGUuYWxsX3ByaW1pdGl2ZXMgKCkpIGluXG4gICAgbGV0IGIgPSBCdWZmZXIuY3JlYXRlIDEwMCBpblxuICAgIGxldCBmbXQgPSBQcmV0dHlfcHJpbnQudG9fYnVmZmVyIGIgaW5cbiAgICBEcml2ZXIuY29uZmlndXJlIGZtdDtcbiAgICBEcml2ZXIuZnJvbV9zdHJpbmcgfnByaW1zIH5kZWJ1ZyBzIGZtdDtcbiAgICBGb3JtYXQuKHBwX3ByaW50X2ZsdXNoIHN0ZF9mb3JtYXR0ZXIgKCkpO1xuICAgIEZvcm1hdC4ocHBfcHJpbnRfZmx1c2ggZXJyX2Zvcm1hdHRlciAoKSk7XG4gICAgZmx1c2ggc3Rkb3V0O1xuICAgIGZsdXNoIHN0ZGVycjtcbiAgICBsZXQganMgPSBCdWZmZXIuY29udGVudHMgYiBpblxuICAgIGxldCByZXMgOiBzdHJpbmcgLT4gdW5pdCAtPiBKLnQgPVxuICAgICAgT2JqLm1hZ2ljIChKLmdldCBnbG9iYWwgKEouc3RyaW5nIFwidG9wbGV2ZWxFdmFsXCIpKVxuICAgIGluXG4gICAgcmVzIChqcyA6IHN0cmluZylcbiAgaW5cbiAgbGV0IHRvcGxldmVsX2V2YWwgKHggOiBzdHJpbmcpIDogdW5pdCAtPiBKLnQgPVxuICAgIGxldCBmIDogSi50ID0gSi5ldmFsX3N0cmluZyB4IGluXG4gICAgZnVuICgpIC0+XG4gICAgICBsZXQgcmVzID0gSi5mdW5fY2FsbCBmIFt8IGdsb2JhbCB8XSBpblxuICAgICAgRm9ybWF0LihwcF9wcmludF9mbHVzaCBzdGRfZm9ybWF0dGVyICgpKTtcbiAgICAgIEZvcm1hdC4ocHBfcHJpbnRfZmx1c2ggZXJyX2Zvcm1hdHRlciAoKSk7XG4gICAgICBmbHVzaCBzdGRvdXQ7XG4gICAgICBmbHVzaCBzdGRlcnI7XG4gICAgICByZXNcbiAgaW5cbiAgbGV0IHRvYyA9IGdldF9ieXRlY29kZV9zZWN0aW9ucyAoKSBpblxuICBsZXQgc3ltID1cbiAgICBsZXQgdCA6IE9jYW1sX2NvbXBpbGVyLlN5bXRhYmxlLkdsb2JhbE1hcC50ID0gdG9jLnN5bWIgaW5cbiAgICBPY2FtbF9jb21waWxlci5TeW10YWJsZS5HbG9iYWxNYXAuZm9sZFxuICAgICAgKGZ1biBpIG4gYWNjIC0+IFN0cmluZ01hcC5hZGQgKE9jYW1sX2NvbXBpbGVyLlN5bXRhYmxlLkdsb2JhbC5uYW1lIGkpIG4gYWNjKVxuICAgICAgdFxuICAgICAgU3RyaW5nTWFwLmVtcHR5XG4gIGluXG4gIGxldCB0b3BsZXZlbF9yZWxvYyAobmFtZSA6IEoudCkgOiBpbnQgPVxuICAgIGxldCBuYW1lID0gSi50b19zdHJpbmcgbmFtZSBpblxuICAgIG1hdGNoIFN0cmluZ01hcC5maW5kX29wdCBuYW1lIHN5bSB3aXRoXG4gICAgfCBTb21lIGkgLT4gaVxuICAgIHwgTm9uZSAtPiBKc19vZl9vY2FtbF9jb21waWxlci5PY2FtbF9jb21waWxlci5TeW10YWJsZS5yZWxvY19pZGVudCBuYW1lXG4gIGluXG4gIEouc2V0IGdsb2JhbCAoSi5zdHJpbmcgXCJ0b3BsZXZlbENvbXBpbGVcIikgKE9iai5tYWdpYyB0b3BsZXZlbF9jb21waWxlKSAoKlhYWCBIQUNLISopO1xuICBKLnNldCBnbG9iYWwgKEouc3RyaW5nIFwidG9wbGV2ZWxFdmFsXCIpIChPYmoubWFnaWMgdG9wbGV2ZWxfZXZhbCk7XG4gIEouc2V0IGdsb2JhbCAoSi5zdHJpbmcgXCJ0b3BsZXZlbFJlbG9jXCIpIChPYmoubWFnaWMgdG9wbGV2ZWxfcmVsb2MpXG4iXX0=

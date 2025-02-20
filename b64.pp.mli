Caml1999N032����            'b64.mli����  		  q  �  J�����1ocaml.ppx.context��&_none_@@ �A����������)tool_name���*ppx_driver@@@����,include_dirs����"[]@@@����)load_path!����
%@%@@����,open_modules*����.@.@@����+for_package3����$None8@8@@����%debug=����%falseB@B@@����+use_threadsG����
K@K@@����-use_vmthreadsP����T@T@@����/recursive_typesY����]@]@@����)principalb����%f@f@@����3transparent_modulesk����.o@o@@����-unboxed_typest����7x@x@@����-unsafe_string}����@�@�@@����'cookies�����o�@�@@@@�@@@�@�������*ocaml.text��������	� Base64 RFC4648 implementation.

    Base64 is a group of similar binary-to-text encoding schemes that represent binary
    data in an ASCII string format by translating it into a radix-64 representation. It
    is specified in RFC 4648. ��'b64.mliT���Xe�@@@@@@���Р0default_alphabet��
Z���Z��@����&string��Z���Z��@@�@@@@���)ocaml.doc��������	? A 64-character string specifying the regular Base64 alphabet. ��"[���#[��@@@@@@@��%Z��@�@���Р1uri_safe_alphabet��.]���/]� @����&string��6]��7]�	@@�@@@@��$�������	N A 64-character string specifying the URI- and filename-safe Base64 alphabet. ��D^

�E^
]@@@@@@@��G]��@�@���Р&decode��P`_c�Q`_i@���(alphabet����&string��\`_v�]`_|@@�@@@��@����&string��g`_��h`_�@@�@@@����&string��p`_��q`_�@@�@@@�@@@��u`_l@@@@��a�������
  
 [decode s] decodes the string [s] that is encoded in Base64 format. Will leave
    trailing NULLs on the string, padding it out to a multiple of 3 characters.
    [alphabet] defaults to {!default_alphabet}.
    @raise Not_found if [s] is not a valid Base64 string. ���a����dd�@@@@@@@���`__@�@���Р&encode���f����f��@���#pad����$bool���f����f��@@�@@@���(alphabet����&string���f����f��@@�@@@��@����&string���f����f��@@�@@@����&string���f����f��@@�@@@�@@@���f��@@@���f��@@@@����������	� [encode s] encodes the string [s] into base64. If [pad] is false, no trailing padding
    is added. [pad] defaults to [true], and [alphabet] to {!default_alphabet}. ���g����h;�@@@@@@@���f��@�@@